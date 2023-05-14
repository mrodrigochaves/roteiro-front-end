import {
  Box,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Card,
  CardBody,
  Text,
  Checkbox
} from "@chakra-ui/react";

export function Forms() {
  return (
    <FormControl display="flex" flexDir="column" gap="4">
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="nome">Nome </FormLabel>
          <Input id="name" />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="nome">Protocolo </FormLabel>
          <Input id="protocol" />
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="30%">
          <FormLabel htmlFor="natural">CNAE</FormLabel>
          <Input id="cnae" />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="nome">Descrição </FormLabel>
          <Input id="description" />
        </Box>
        <Box w="30%">
          <FormLabel htmlFor="nome">Grau de Risco </FormLabel>
          <Input id="grau" />
        </Box>
        <Box>
          <FormLabel>Exerce atividade no local?</FormLabel>
          <RadioGroup defaultValue='no'>
            <HStack spacing='24px'>
              <Radio value='yes'>Sim</Radio>
              <Radio colorScheme='red' value='no'>Não</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="21%">
          <FormLabel htmlFor="natural">CNAE</FormLabel>
          <Input id="cnae" />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="nome">Descrição </FormLabel>
          <Input id="description" />
        </Box>
        <Box>
          <FormLabel>Exerce atividade no local?</FormLabel>
          <RadioGroup defaultValue='no'>
            <HStack spacing='24px'>
              <Radio value='yes'>Sim</Radio>
              <Radio colorScheme='red' value='no'>Não</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>
      <HStack>
        <Card spacing={[2, 5]} direction={['column', 'row']}>
          <CardBody>
            <Text pt='2' fontSize='sm'>Pergunta 1 - Haverá o desenvolvimento de softwares que realizam ou influenciam diretamente no diagnóstico, monitoramento, terapia(tratamento) para saúde? </Text>
            <Text pt='2' fontSize='sm'>Resposta: </Text>
            <Checkbox spacing='10px' size='md' colorScheme='blue' >
              Sim
            </Checkbox>
            <Checkbox spacing='10px' size='md' colorScheme='blue' >
              Alto Risco
            </Checkbox>
            <Checkbox spacing='10px' size='md' colorScheme='blue' >
              Não
            </Checkbox>
            <Checkbox spacing='10px' size='md' colorScheme='blue' >
              Baixo Risco
            </Checkbox>
          </CardBody>
        </Card>
      </HStack>
      <HStack>
        <Box w="100%">
          <Text pt='2' fontSize='md'>Este estabelecimento requer Responsavél Técnico para a(s) atividade(s) licenciada(s)?</Text>
        </Box>
        <Box>
          <RadioGroup defaultValue='no'>
            <HStack spacing='24px'>
              <Radio value='yes'>Sim</Radio>
              <Radio colorScheme='red' value='no'>Não</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>
      <HStack>
        <Box w="100%">
          <Text pt='2' fontSize='md'>Segundo as normas do Conselho de Classe, este RT é exclusivo?</Text>
        </Box>
        <Box>
          <RadioGroup defaultValue='no'>
            <HStack spacing='24px'>
              <Radio value='yes'>Sim</Radio>
              <Radio colorScheme='red' value='no'>Não</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="nome">Nome do RT </FormLabel>
          <Input id="name_rt" />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="nome">CPF </FormLabel>
          <Input id="cpf" />
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
      <HStack direction='row'  spacing='24px'>
        <Box>
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
        </Box>
        <Box>
        <Button
          w={240}
          p="6"
          type="submit"
          bg="blue.400"
          color="white"
          fontWeight="bold"
          fontSize="xl"
          mt="2"
          _hover={{ bg: "blue.700" }}
        >
          Imprimir
        </Button>
        </Box>
      </HStack>
    </FormControl >
  )
}