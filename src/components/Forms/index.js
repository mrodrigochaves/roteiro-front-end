import {
  Box,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export function Forms() {
  return (
    <FormControl display="flex" flexDir="column" gap="4">
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="nome">Nome </FormLabel>
          <Input id="name" />
        </Box>
        <Box w="100%">
          <FormLabel htmlFor="nome">Protocolo </FormLabel>
          <Input id="number" />
        </Box>
      </HStack>
      <HStack spacing="4">
      <Box w="30%">
          <FormLabel htmlFor="natural">CNAE</FormLabel>
          <Input id="number" />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="nome">Descrição </FormLabel>
          <Input id="description" />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="nome">Grau de Risco </FormLabel>
          <Input id="grau" />
        </Box>
        
      </HStack>
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel>Conclusão</FormLabel>
          <RadioGroup defaultValue="Baixo">
            <HStack spacing="24px">
              <Radio value="Baixo">Baixo Risco</Radio>
              <Radio value="Médio">Médio Risco</Radio>
              <Radio value="Alto">Alto Risco</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>
      <HStack justify="center">
        <Button
          w={240}
          p="6"
          type="submit"
          bg="blue.600"
          color="white"
          fontWeight="bold"
          fontSize="xl"
          mt="2"
          _hover={{ bg: "blue.800" }}
        >
          Enviar
        </Button>
      </HStack>
    </FormControl>
  )
}