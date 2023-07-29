import styled from "styled-components";

const StyleDes = styled.div``;

function Description(): JSX.Element {
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
