"use client"
import Typed from "typed.js";
import React, { useRef, useEffect } from 'react';

const Typing = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLSpanElement>(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      const options = {
        strings: [
          'Software Engineer',
          'Web Developer',
          'Mayur Jadhav',
        ],
        typeSpeed: 70,
        backSpeed: 60,
      };

      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
    }

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      if (typed.current) {
        typed.current.destroy();
      }
    }
  }, [])

  return <span ref={el} />;
}

export default Typing;
