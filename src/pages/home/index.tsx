import TypingText from "./typing";
import Components from "@/components";
import Box from "@/components/box";

function HomePage(): JSX.Element {
  return (
    <Components.Wrapper>
      <Components.Box flexDirection={"column"} gap={10}>
        <Components.Title
          text="Hey, I'm Crack"
          fontSize={"4rem"}
          fontWeight={"bold"}
        />
        <Components.Box>
          <TypingText />
        </Components.Box>
        <Components.SubTitle text="Web developer &amp; Full-Stack developer." />
        <Components.Description />
      </Components.Box>
      <Box paddingTop={"1.25rem"}>
        <Components.ButtonSheen text="GET IN TOUCH" />
      </Box>
      <Components.Footer />
    </Components.Wrapper>
  );
}

export default HomePage;
