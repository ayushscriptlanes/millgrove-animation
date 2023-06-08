import { useState, useEffect, useRef } from "react";
import { Button, duration, LinearProgress } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useAnimationControls,
  circOut,
} from "framer-motion";

import Styles from "./Home.module.css";
import "../../assets/global.css";
import { SportsRugbySharp } from "@mui/icons-material";

export default function Home() {
  const [specialState, setSpecialState] = useState(0);
  const [progress, setProgress] = useState(0);
  const classNames = String;

  const loaderDivRef = useRef();
  const houseRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll();

  const controls = useAnimationControls();
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const semiEllipseControls = useAnimationControls();
  const fullEllipseControls1 = useAnimationControls();
  const opacityControl1 = useAnimationControls();
  const colorChangeControl1 = useAnimationControls();

  useEffect(() => {
    let intervalKey = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress === 100) {
          clearInterval(intervalKey);
          return 100;
        }
        return previousProgress + 5;
      });
    }, 200);

    setTimeout(() => {
      controls1.start({
        x: 0,
        y: 0,
        transition: { ease: "easeOut", duration: 2 },
      });

      controls2.start({
        x: 0,
        y: 0,
        transition: { ease: "easeOut", duration: 2 },
      });
    }, 2700);

    setTimeout(() => {
      // navigate("/home");
      // setTimeout(() => {
      loaderDivRef.current.style.display = 'none';
      // }, 1000)
    }, 8700);

    controls.start((i) => ({
      y: 0,
      transition: { ease: "easeOut", duration: 1, delay: i * 0.08 },
    }));

    semiEllipseControls.start({ y: y });
  }, []);

  useEffect(() => {
    console.log('special state value is', specialState);
    if (specialState > 550 && specialState < 650) {
      fullEllipseControls1.start({ opacity: 1, scale: 0.49 + ((specialState - 550) * 0.51 / 100), y: -290 + ((specialState - 550) * 2.9), transition: { duration: 0, ease: [0, 0, 0.6, 1] } });
    }
    else if (specialState >= 650) {
      fullEllipseControls1.start({ opacity: 1, y: 0, scale: 1, transition: { ease: [0, 0, 0.6, 1] } })
        .then(() => {
          fullEllipseControls1.stop();
        });

    }
    else if (specialState <= 550) {
      fullEllipseControls1.start({ opacity: 0, scale: 0.49, y: -290, transition: { duration: 0, ease: [0, 0, 0.6, 1] } });
    }

    if (specialState > 1080) {
      opacityControl1.start({ opacity: 0, transition: { duration: 0.08 } });
    }
    else if (specialState <= 1080) {
      opacityControl1.start({ opacity: 1, transition: { duration: 0.08 } });
    }
  }, [specialState]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log('scroll value is', latest);
    if (latest > 140) {
      semiEllipseControls.stop();
      // fullEllipseControls1.start({opacity: 1, scale: 1, y: -290 + latest - 140});
    }
    setSpecialState(latest);
  });

  const x = useTransform(scrollYProgress, [0.18, 0.3], [2300, -1000]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  // const isInView = useInView(houseRef)

  //useful links
  //https://popmotion.io/pose/learn/custom-transitions/
  //https://www.framer.com/motion/motionvalue/

  return (
    <>
      <motion.div
        className={Styles["loader-background"]}
        animate={{ opacity: 0, transition: { delay: 8 } }}
        ref={loaderDivRef}
      >
        <motion.img
          className={Styles["loader-flower-1"]}
          initial={{ x: -341, y: -341 }}
          animate={{
            x: 0,
            y: 0,
            transition: { ease: "easeOut", duration: 2, delay: 3 },
          }}
          src="/images/LoaderFlower1.svg"
          alt="flower"
        />

        <motion.img
          initial={{ x: 350, y: 350 }}
          animate={controls2}
          src="/images/LoaderFlower2.svg"
          alt="flower"
          className={Styles["loader-flower-2"]}
        />

        <div className={Styles["loader-container"]}>
          <div className={Styles["blank-div"]} />

          {/* <span className={Styles["company-name"]}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={0}
              animate={controls}
            >
              M
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={1}
              animate={controls}
            >
              I
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={2}
              animate={controls}
            >
              L
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={3}
              animate={controls}
            >
              L
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={4}
              animate={controls}
            >
              G
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={5}
              animate={controls}
            >
              R
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={6}
              animate={controls}
            >
              O
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={7}
              animate={controls}
            >
              V
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={8}
              animate={controls}
            >
              E
            </motion.span>
          </span> */}

          <div className={Styles["custom-linear-progress-container"]}>
            <div className={Styles["loading-statement"]}>
              LOADING EXPERIENCE
            </div>

            <LinearProgress
              sx={{ backgroundColor: "rgb(126, 111, 90)", height: 2 }}
              className={Styles["custom-linear-progress"]}
              variant="determinate"
              value={progress}
              color="primary"
            />
            {/* <BorderLinearProgress value={10}/> */}
          </div>
        </div>
      </motion.div>
      <div className={Styles["title-container"]}>
        <span
        // className={Styles["title"]}
        >
          {/* <motion.img initial={{y: 300, scale: 3}} animate={{y: 0, scale: 1, transition: {delay: 1, ease: 'easeOut', duration: 1}}} src="/images/Logo.svg" alt="MILLGROVE" height={22} /> */}

          <motion.span
            className={Styles["title"]}
            initial={{ y: 250, scale: 4 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { ease: "easeOut", delay: 8, duration: 1 },
            }}
          // className={Styles["company-name"]}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={0}
              animate={controls}
            >
              M
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={1}
              animate={controls}
            >
              I
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={2}
              animate={controls}
            >
              L
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={3}
              animate={controls}
            >
              L
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={4}
              animate={controls}
            >
              G
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={5}
              animate={controls}
            >
              R
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={6}
              animate={controls}
            >
              O
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={7}
              animate={controls}
            >
              V
            </motion.span>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: 200 }}
              custom={8}
              animate={controls}
            >
              E
            </motion.span>
          </motion.span>
        </span>
      </div>
      <div className={Styles["top-bar"]}>
        <Button
          sx={{
            color: "white",
            marginLeft: 2,
          }}
          variant="text"
          startIcon={<CircleIcon />}
        >
          Menu
        </Button>

        <Button
          variant="text"
          sx={{
            color: "white",
            marginRight: 2,
          }}
        >
          Contact
        </Button>
      </div>
      <div className={Styles["landing-section-1"]}>
        <div className={Styles["section-1-text"]}>
          <div className={classNames(Styles["section-1-text-1"], "large-text")}>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: 200 }}
              animate={{ y: 0, transition: { delay: 8, ease: 'easeOut', duration: 1 } }}
            >
              Meticulous homes
            </motion.span>
          </div>

          <div className={Styles["section-1-text-2"]}>
            <span>DISCOVER</span> <span>MEANINGFUL</span> <span>LIVING</span>
          </div>

          <div
            className={classNames("large-text", Styles["section-1-text-3"])}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: 200 }}
              animate={{ y: 0, transition: { delay: 8, ease: 'easeOut', duration: 1 } }}
            >
              Meaningful living
            </motion.span>
          </div>

          <div className={Styles["section-1-text-4"]}>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: 200 }}
              animate={{ y: 0, transition: { delay: 8, ease: 'easeOut', duration: 1 } }}
            >
              Millgrove is a limited collection of private residences nestled in
              the heart of New Gurugram. Just 50 1000sq yard plots have been
              thoughtfully arranged within a 23-acre secure gated community.
            </motion.span>
          </div>
        </div>
        <motion.div
          className={Styles["section-1-part-2"]}
          animate={semiEllipseControls}
          style={{ y: y }}
        >
          {/* <div className='nextButtonIm'> */}
          <img
            src="/images/NextSectionButton.svg"
            className={Styles["next-button-image"]}
            alt="Semi Ellipse"
          />

          {/* <div className='content-over-semi-ellipse'> */}
          <img
            src="/images/ImageOverEllipse.svg"
            alt="DISCOVER MEANINGFUL HOMES"
            className={Styles["content-over-semi-ellipse"]}
          />
          {/* </div> */}
          {/* </div> */}
        </motion.div>
      </div>
      <motion.div
        className={Styles["landing-section-2"]}
        animate={specialState > 1080 ? { background: '#1a3837' } : { background: '#f1efe5' }}>
        <div
          className={Styles['section-2-image-1-container']}
        >
          <motion.img
            className={Styles["section-2-image-1"]}
            src="/images/TextAroundFullEllipse.svg"
            alt="Made by those who care, for those that care."
            initial={{ y: 100 }}
            animate={{ y: 0, transition: { delay: 2, ease: 'easeOut' } }}
          />
        </div>
        <motion.img
          className={Styles["section-2-image-2"]}
          src="/images/FullEllipse.svg"
          alt="Buildings"
          initial={{ scale: 0.49, y: -290 }}
          animate={specialState > 650 ? { scale: 1, y: 0, opacity: 1 } : fullEllipseControls1}
        />
        <img
          className={Styles["section-2-image-3"]}
          src="/images/ImageUnderFullEllipse.svg"
          alt=" "
        />
        <motion.span
          className={classNames("large-text", Styles["section-2-text-1"])}
          style={{ x: x }}
          initial={{ opacity: 1 }}
          animate={opacityControl1}
        >
          A place where you can make time for the things that matter most.
        </motion.span>
      </motion.div>

      <div className={Styles["landing-section-3"]}>
        <div className={Styles["section-3-container"]}>
          <div
            className={classNames(Styles["section-3-text-1"], "medium-text")}
          >
            Our intent was simple. To create somewhere we would be proud to call
            home. Somewhere we could leave a meaningful love; Meaning seperates
            the good from the great; like from
          </div>
          <img
            className={Styles["section-3-image-1"]}
            src="/images/Flower.svg"
            alt=""
          />
          <img
            className={Styles["section-3-image-2"]}
            src="/images/UniqueSeperator.svg"
            alt="___________________________________________"
          />

          <span className={Styles["section-3-text-2"]}>
            From your friends at
          </span>

          <img
            className={Styles["section-3-image-3"]}
            src="/images/Sign.svg"
            alt="Sign"
          />

          <motion.div
            className={Styles["house-image-container"]}
            style={{
              scaleX:
                100 - (specialState - 1830) >= 100
                  ? "100%"
                  : 100 - (specialState - 1830) <= 95
                    ? "95%"
                    : `${100 - (specialState - 1830)}%`,
            }} //, width: changingWidth
          >
            <motion.img
              ref={houseRef}
              // initial={{scale: 1.3}}
              // whileInView={{scale: 1.0}}
              src="/images/House.svg"
              className={Styles["section-3-image-4"]}
              alt="House"
              style={{
                y:
                  specialState < 1950
                    ? 0
                    : specialState > 2130
                      ? -180
                      : 1950 - specialState,
              }}
            // style={{ scaleX: (100 - (specialState - 1830)) >= 100 ? '100%' : (100 - (specialState - 1830)) <= 90 ? '90%' : `${(100 - (specialState - 1830))}%`}} //, width: changingWidth
            // style={{scale: (150 - (specialState - 1625)) >= 150 ? '150%' : (150 - (specialState - 1625)) <= 100 ? '100%' : (150 - (specialState - 1625))}}
            />
          </motion.div>

          <span
            className={classNames("large-text", Styles["section-3-text-3"])}
          >
            Welcome to Millgrove
          </span>

          <div
            className={classNames("medium-text", Styles["section-3-text-4"])}
          >
            A private collection of homes nestled in the heart of Gurugram
          </div>
        </div>
      </div>

      <div className={Styles["landing-section-4"]}>
        <div className={Styles["section-4-text"]}>
          <span
            className={classNames("large-text", Styles["section-4-text-1"])}
          >
            SHAPE YOUR LIFE
          </span>

          <div className={Styles["full-width-flex-container"]}>
            <span className={Styles["section-4-text-2"]}>
              Millgrove extends an unparalleled offering to a select few - a
              rare chance to own a 1000 square yard plot inclusive of an
              exquisite independent home. With an ambition to kindle a small,
              tight-knit community of free-thinking individuals, we have
              thoughtfully arranged only a limited number of plots over our lush
              23-acre estate.
            </span>

            {/* <span
              className={Styles['section-4-text-3']}
            >
              On
            </span> */}
            <img src="/images/On.svg" alt="On" />
          </div>

          <span
            className={classNames("large-text", Styles["section-4-text-4"])}
          >
            YOUR OWN LAND
          </span>
        </div>

        <img
          src="/images/ConstructionModel.svg"
          alt="Construction Model"
          className={Styles["section-4-image"]}
        />
      </div>
    </>
  );
}
