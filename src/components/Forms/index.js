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
  CardHeader,
  CardBody,
  Text,
  Checkbox,
  Heading,
  Stack,
  StackDivider,
  Select
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
        <Box w="100%">
          <Text fontSize='lg' fontWeight='bold' textTransform='uppercase'>Atividade Principal</Text>
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
        <Box w="35%">
          <FormLabel htmlFor="nome">Grau de Risco </FormLabel>
          <Select placeholder='Escolha uma opção'>
            <option value='low'>Baixo Risco</option>
            <option value='medium'>Médio Risco</option>
            <option value='high'>Alto Risco</option>
          </Select>
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
      <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
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
          <RadioGroup defaultValue="low">
            <HStack spacing="24px">
              <Radio value="low">Baixo Risco</Radio>
              <Radio value="medium">Médio Risco</Radio>
              <Radio value="high">Alto Risco</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>
      <HStack>
        <Box>
        <Card>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Assinatura do RT
        </Heading>
        </Box>
        <Box>
        <Text pt='2' fontSize='sm'>
          ------------------------------------------
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
        </Box>
      </HStack>
      <HStack direction='row' spacing='24px'>
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
            Salvar
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