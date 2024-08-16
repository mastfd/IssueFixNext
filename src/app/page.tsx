"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="p-4 w-full h-screen flex justify-center items-center">
      <Card className="w-full sm:w-1/4">
        <CardHeader className="grid grid-cols-1 place-items-center">
          <Image
            alt="Logo del corral"
            height={100}
            radius="sm"
            src="./logo.png"
            width={120}
          />
          <h3 className="text-2xl font-bold">Iniciar sesión</h3>
        </CardHeader>
        <CardBody className="grid grid-cols-1 gap-6">
          <Input
            isClearable
            isRequired
            variant="bordered"
            type="text"
            label="Usuario"
            className="w-full"
          />
          <Input
            isRequired
            label="Contraseña"
            variant="bordered"
            className="w-full"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </CardBody>
        <CardFooter className="mt-4">
          <Button
            color="danger"
            endContent={<FaSignInAlt />}
            className="w-full"
          >
            Iniciar sesión
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
