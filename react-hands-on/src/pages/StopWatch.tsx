import React from 'react'
import { Button } from '@chakra-ui/react'

const StopWatch = () => {
  return (
    <>
      <Button mt={'4'} colorScheme="teal">
        start
      </Button>
      <Button mt={'4'} colorScheme="red">
        stop
      </Button>
    </>
  );
}

export default StopWatch
