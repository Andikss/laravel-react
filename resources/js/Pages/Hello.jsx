import React, { useState } from 'react';
import { Flex, Text, Button, useToast } from '@chakra-ui/react';
import { FaLaravel, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const spinningIconVariants = {
  initial: { rotate: 0 },
  spinning: { rotate: 360 },
};

const iconTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 10,
  repeat: Infinity, 
};

const Hello = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const toast = useToast();

  const handleButtonClick = () => {
    setIsSpinning(false);
    toast({
      title: "Woohooo!!",
      description: "You did it!!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  };

  return (
    <Flex
      height="100vh"
      width="100vw"
      align="center"
      justify="center"
      flexDirection="column"
      gap="12px"
    >
      <Flex direction="row" gap="100px">
        <FaLaravel size={100} style={{ marginRight: '10px' }} />
        <motion.div
          variants={spinningIconVariants}
          initial="initial"
          animate={isSpinning ? "spinning" : "initial"} 
          transition={iconTransition}
        >
          <FaReact size={100} style={{ marginRight: '10px' }} />
        </motion.div>
      </Flex>
      <Text fontSize="5xl" fontWeight="bold" mb={3}>
        Laravel + ReactJS
      </Text>
      <Button colorScheme="teal" size="md" onClick={handleButtonClick}>
        Click Me!
      </Button>
    </Flex>
  );
};

export default Hello;
