import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {Resend} from "resend";
import {Worker} from "bullmq";
import IORedis from "ioredis";
import { applicationReceived } from "./templates/applying.js";
import { applicationAccepted } from "./templates/hired.js";
import { applicationRejected } from "./templates/rejected.js";

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});
const worker = new Worker(
  "jeesociety-email",
  async (job) => {
    const data = job.data;
    let html = "";

    let subject = "";

    switch (job.name) {
      case "application":
        html = applicationReceived(data);
        subject = `We received your application for ${data.jobTitle} — JEEsociety`;
        break;

      case "accepted":
        html = applicationAccepted(data);
        subject = `Congratulations! You've been selected for ${data.jobTitle} — JEEsociety`;
        break;

      case "rejected":
        html = applicationRejected(data);
        subject = `An update on your ${data.jobTitle} application — JEEsociety`;
        break;

      default:
        throw new Error(`Unknown job type: ${job.name}`);
    }

    await resend.emails.send({
      from: "JEE Society <noreply@jeesociety.in>",
      to: data.email,
      subject,
      html,
    });
  },
  {
    connection,
  }
);
console.log("Worker is running and listening for jobs...");