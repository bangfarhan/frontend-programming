/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyledFooter, { Container } from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <StyledFooter>
        <h2>Movie App</h2>
        <p>Created by aufaroot18</p>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
