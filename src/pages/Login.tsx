import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
  async function handleLogin() {}

  return (
    <div id="page-login">
      <aside>
        <strong>Nome da instituição / logo</strong>
        <p>Slogan or whatever</p>
      </aside>
      <main>
        <div className="main-content">
          <form onSubmit={handleLogin}>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
