import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function CallToActionWithVideo() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Discover Your,
            </Text>
            <br />
            <Text as={"span"} color={"green.400"}>
              New Home
            </Text>
          </Heading>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link
              activeClass="active"
              to="rental-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"green.400"}
                _hover={{ bg: "green.500" }}
              >
                Get started &nbsp;
                <AiOutlineArrowRight />
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
