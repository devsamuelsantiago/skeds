"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircledIcon, MinusCircledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [charMin, setCharMin] = useState(false);
  const [uppercaseChar, setUppercaseChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let charMinCounter,
      uppercaseCharCounter,
      numberCounter,
      symbolCounter = 0;

    if (password.length >= 8) {
      setCharMin(true);
      charMinCounter = 2;
    } else {
      setCharMin(false);
      charMinCounter = 0;
    }

    if (/[A-Z]/.test(password)) {
      setUppercaseChar(true);
      uppercaseCharCounter = 1;
    } else {
      setUppercaseChar(false);
      uppercaseCharCounter = 0;
    }

    if (/[0-9]/.test(password)) {
      setNumber(true);
      numberCounter = 1;
    } else {
      setNumber(false);
      numberCounter = 0;
    }

    if (/[!@#$%&*]/.test(password)) {
      setSymbol(true);
      symbolCounter = 1;
    } else {
      setSymbol(false);
      symbolCounter = 0;
    }

    setProgress(
      charMinCounter + uppercaseCharCounter + numberCounter + symbolCounter
    );

    console.log(progress);
  }, [password]);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(name, email, phone, password, confirmPassword);

    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });

  };

  return (
    <div className="flex h-screen bg-zinc-300">
      <form
        className="flex flex-col m-auto gap-5 p-8 w-[30%] h-min-[60%] h-max-[90%] bg-zinc-100 rounded-lg shadow-lg"
        onSubmit={(e)=>handleOnSubmit(e)}
      >
        <div className="flex h-[30%] w-full">
          <h1 className=" text-4xl w-min h-min m-auto">[logo]</h1>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="user" className="text-lg">
              Nome da organização
            </Label>
            <Input
              type="text"
              id="suer"
              placeholder="..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 active:scale-105 transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-lg">
              E-mail
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 active:scale-105 transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-lg">
              Telefone
            </Label>
            <Input
              type="text"
              id="phone"
              placeholder="+55 (11) 9 9876-5432"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 active:scale-105 transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-lg">
              Senha
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="h-12 active:scale-105 transition-all duration-300 password-input peer"
              required
            />
            <div className="flex flex-col gap-2">
              <div>
                <p
                  className={
                    (charMin ? "text-green-500 " : "text-zinc-500 ") +
                    "flex flex-row items-center gap-1"
                  }
                >
                  {charMin ? <CheckCircledIcon /> : <MinusCircledIcon />}A senha
                  deve ter pelo menos 8 caracteres.
                </p>
                <p
                  className={
                    (uppercaseChar ? "text-green-500 " : "text-zinc-500 ") +
                    "flex flex-row items-center gap-1"
                  }
                >
                  {uppercaseChar ? <CheckCircledIcon /> : <MinusCircledIcon />}A
                  senha deve ter uma letra maiúscula.
                </p>
                <p
                  className={
                    (number ? "text-green-500 " : "text-zinc-500 ") +
                    "flex flex-row items-center gap-1"
                  }
                >
                  {number ? <CheckCircledIcon /> : <MinusCircledIcon />}A senha
                  deve ter um número.
                </p>
                <p
                  className={
                    (symbol ? "text-green-500 " : "text-zinc-500 ") +
                    "flex flex-row items-center gap-1"
                  }
                >
                  {symbol ? <CheckCircledIcon /> : <MinusCircledIcon />}A senha
                  deve ter um símbolo (!@#$%&*).
                </p>
              </div>
              <Progress value={(progress * 100) / 5} />
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <Label htmlFor="confirm-password" className="text-lg">
              Confirme a senha
            </Label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="h-12 active:scale-105 transition-all duration-300 password-input peer"
              required
            />
            <div>
              {confirmPassword != password ? (
                <p className="text-red-500 flex flex-row items-center gap-1">
                  As senhas não correspondem
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <Button
            className="w-full h-12 text-lg active:scale-105 transition-all duration-300"
            type="submit"
            variant="default"
          >
            Cadastrar-se
          </Button>
        </div>
      </form>
    </div>
  );
}
