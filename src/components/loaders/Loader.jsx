import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";

import Styles from "./Loader.module.css";
import "../../assets/global.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const controls = useAnimationControls();
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const navigate = useNavigate();

  

  return (
    <>
    </>
  );
}
