import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>About Agency</h2>
                
                <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>15 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
            <div className={styles.imgContainer }> 
                <Image src= "/about.jpg" alt="About Image"  width={400} height={600} />
            </div>
        </div>
        </div>
    )
};

export default AboutPage;