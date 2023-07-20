import styled from "styled-components";

function Description(): JSX.Element {
  const StyleDes = styled.div``;

  return (
    <StyleDes>
      <p>
        Currently a Senior developer at
        <a href="https://blueseas.co.th/" className="text-link">
          Bluesea Enterprise
        </a>
      </p>
    </StyleDes>
  );
}

export default Description;
