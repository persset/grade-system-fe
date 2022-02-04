import { styled } from "@stitches/react";
import { PageBox } from "../components/PageBox";

export function Dashboard() {
  const Box = styled("div", {});
  const Main = styled("main", {});
  const Aside = styled("aside", {});

  return (
    <PageBox id="page-dashboard">
      <Aside
        css={{
          flex: 2,
          background: "#2d6eeb",
          color: "#fff",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          padding: "120px 80px",
        }}
      ></Aside>
      <Main
        css={{
          flex: 10,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="main-content"></div>
      </Main>
    </PageBox>
  );
}
