import { Center } from '@chakra-ui/react';

export function Header(){
    return(
        <Center
        as="header"
        h={150}
        bg="blue.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Roteiro de Avaliação de Grau de Risco
      </Center>
    )
}