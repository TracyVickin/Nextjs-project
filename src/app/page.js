import Image from "next/image";
import styles from "./home.module.css";
const Home =() =>{
  return (
  <div className={styles.container}> 
  <div className={styles.textContainer}>
    <h1 className={styles.title}>Cretive Thought Agency</h1>
    <p className={styles.description}>Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.</p>
    <div className={styles.buttons}>
      <button className={styles.button}>Learn More</button>
      <button className={styles.button}>Contact Us</button>
    </div>
    <div className={styles.brands}>
    {/* <Image src="/brands.jpg" alt="" fill className={styles.brandsImg}/> */}
    </div>
  </div>
  <div className={styles.imgContainer}>
    <Image src="/hero.jpg" alt="" width={400} height={600} className= {styles.heroImg}/>
  </div>
  </div>
)
};

export default Home;