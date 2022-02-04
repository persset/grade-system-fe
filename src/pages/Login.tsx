import { styled } from "@stitches/react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { PageBox } from "../components/PageBox";

export function Login() {
  async function handleLogin() {}

  const Box = styled("div", {});
  const Main = styled("main", {});
  const Aside = styled("aside", {});

  return (
    <PageBox id="page-login">
      <Aside
        css={{
          flex: 6,
          background: "#2d6eeb",
          color: "#fff",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          padding: "120px 80px",
        }}
      >
        <strong>aaaaaaaaaaaaaaaaaaaaaaaa</strong>
        <p>aaaaaaaaaaaaaaaaaaaa</p>
      </Aside>
      <Main
        css={{
          flex: 8,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="main-content"
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "320px",
            alignItems: "stretch",
            textAlign: "center",
          }}
        >
          <form onSubmit={handleLogin}>
            <Input type="email" placeholder="Email" css={{ width: "100%" }} />
            <Input
              type="password"
              placeholder="Senha"
              css={{ width: "100%" }}
            />

            <Button type="submit" css={{ width: "100%" }}>
              Entrar
            </Button>
          </form>
        </Box>
      </Main>
    </PageBox>
  );
}
