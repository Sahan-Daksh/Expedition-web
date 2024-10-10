"use client"

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

interface Event {
  time: string;
  title: string;
  icon: JSX.Element;
}

export default function Phases() {
  const events: Event[] = [
    {
      time: "28th September",
      title: "Awareness Session",
      icon: <AnnouncementIcon fontSize="medium" />,
    },
    {
      time: "5th October",
      title: "IEEE Day",
      icon: <AssignmentTurnedInIcon fontSize="medium" />,
    },
    {
      time: "8th and 9th October",
      title: "Workshop 1",
      icon: <PeopleIcon fontSize="medium" />,
    },
    {
      time: "13th October",
      title: "Workshop 2",
      icon: <PeopleIcon fontSize="medium" />,
    },
    {
      time: "19th October",
      title: "Haxpedition",
      icon: <AssignmentTurnedInIcon fontSize="medium" />,
    },
    {
      time: "26th October",
      title: "Xtreme 18.0",
      icon: <EmojiEventsIcon fontSize="medium" />,
    },
  ];

  return (
    <Box padding="20px">
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index} sx={{ minHeight: "120px" }}>
            <TimelineSeparator>
              <TimelineDot
                color="primary"
                sx={{
                  backgroundColor: "#2574DD", // Changed from theme to direct color
                  transform: "scale(1.5)",
                }}
              >
                {event.icon}
              </TimelineDot>
              {index < events.length - 1 && (
                <TimelineConnector
                  sx={{
                    transition: "height 0.3s ease-in-out",
                    height: "40px",
                    backgroundColor: "gray", // Set a default color
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                py: "12px",
                px: 2,
                fontSize: "2rem",
                color: "black", // Changed from theme to direct color
                textAlign: index % 2 === 0 ? "left" : "right",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h5" component="span" sx={{ color: "black" }} fontWeight="bold">
                  {event.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black", // Changed from theme to direct color
                    ml: index % 2 === 0 ? 2 : 0,
                    mr: index % 2 === 0 ? 0 : 2,
                  }}
                >
                  {event.time}
                </Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
