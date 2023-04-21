import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimateRight = (props) => {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <motion.div initial={{ opacity: 0 }} animate={inView ? { x: [150, 0], opacity: 1 } : {}} transition={{ duration: 2, ease: [0.16, 0.77, 0.47, .97] }} ref={ref}>
            {props.children}
        </motion.div>
    )
}

export default AnimateRight