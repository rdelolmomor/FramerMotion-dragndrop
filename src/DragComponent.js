import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@mui/material";

export default function DragComponent({ refComponent }) {
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
          backgroundColor: "#00ffff",
          height: "100%",
          borderRadius: "10%"
        }}
      >
        <CardHeader title="Titulo" />
        <CardContent>Contenido</CardContent>
      </Card>
    </motion.div>
  );
}
