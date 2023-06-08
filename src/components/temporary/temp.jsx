import { useEffect } from "react";
import { LinearProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { delay, motion, useAnimationControls } from 'framer-motion';

import Styles from './Loader.module.css';
import '../../assets/global.css';

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   width: '30vw',
//   height: 3,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     backgroundColor: theme.palette.mode === 'light' ? 'black' : 'white',
//   },
// }));

export default function Loader() {
  const controls = useAnimationControls();
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/home");
    // }, 1000 * 60 * 10);

    // controls.start(i => {
    //   console.log('value of i is', i);
    //   return ({
    //   scale: 2.0,
    //   // transition: {delay: (i * 0.099)}
    // });

    controls.start(i => ({
      // opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }))
  // })
  }, []);

  // const [progress, setProgress] = useState(0)

  return (
    <div className={Styles['loader-container']}>
      <div className={Styles['blank-div']} />
      
      <span
        className={Styles['company-name']}
      >
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={0} animate={controls}>M</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={1} animate={controls}>I</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={2} animate={controls}>L</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={3} animate={controls}>L</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={4} animate={controls}>G</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={5} animate={controls}>R</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={6} animate={controls}>O</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={7} animate={controls}>V</motion.div>
        <motion.div style={{display: 'inline-block'}} initial={{y: 200}} custom={8} animate={controls}>E</motion.div>
      </span>

      <div
        className={Styles['custom-linear-progress-container']}
      >
        <div className={Styles['loading-statement']}>LOADING EXPERIENCE</div>

        <LinearProgress
          className={Styles['custom-linear-progress']}
          variant='determinate'
          value={10}
          color='secondary'
        />
        {/* <BorderLinearProgress value={10}/> */}
      </div>
    </div>);
}
