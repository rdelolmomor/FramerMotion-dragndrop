import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@mui/material";
import { randomColor } from "../js/helper";

export default function DragComponent({ refComponent, data }) {
  return (
    <motion.div
      className="Drag"
      drag
      dragConstraints={refComponent}
      dragMomentum={false}
    >
      <Card
        elevation={2}
        style={{
          backgroundColor: randomColor(),
          height: "100%",
          borderRadius: "10%"
        }}
      >
        <CardHeader title={data.title} subheader={data.author} />
        <CardContent>{data.content}</CardContent>
      </Card>
    </motion.div>
  );
}
