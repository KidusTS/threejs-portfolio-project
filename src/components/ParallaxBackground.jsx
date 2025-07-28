import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const springX = useSpring(scrollYProgress, {damping: 50});
  const mountain3Y = useTransform(springX, [0, 0.5], ["0%", "70%"]);
  const planestX = useTransform(springX, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(springX, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(springX, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40"> 
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky  */}
        <div className="absolute inset-0 w-full h-screen -z-50" style={{
          backgroundImage: "url('/assets/sky.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }} />
        {/* Mountain Layer 3 */}
        <motion.div className="absolute inset-0 -z-40" style={{
          backgroundImage: "url('/assets/mountain-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: mountain3Y,
        }}/>
        {/* Planets */}
        <motion.div className="absolute inset-0 -z-30" style={{
          backgroundImage: "url('/assets/planets.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          x:planestX,
        }} />
        {/* Mountain Layer 2  */}
        <motion.div className="absolute inset-0 -z-20" style={{
          backgroundImage: "url('/assets/mountain-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: mountain2Y,
        }}/>
        {/* Mountain Layer 1 */}
        <motion.div className="absolute inset-0 -z-10" style={{
          backgroundImage: "url('/assets/mountain-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: mountain1Y,
        }}/>
      </div>
    </section>
  )
}

export default ParallaxBackground