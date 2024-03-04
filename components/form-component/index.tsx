"use client";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
type IProps = {
  genre: string;
};
const FormComponent: React.FC<IProps> = ({ genre }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("data", data);
      })}
      className="flex max-w-md flex-col gap-4 w-1/4"
    >
      {genre === "signUp" && (
        <div>
          <div>
            <Label className="text-slate-200" htmlFor="email2" value="İsim" />
          </div>
          <TextInput
            {...register("fullname")}
            id="fullname"
            type="text"
            placeholder="Aytuhan Kazandırmak"
            required
            shadow
          />
        </div>
      )}
      <div>
        <div className="mb-2 block">
          <Label className="text-slate-200" htmlFor="email1" value="Email" />
        </div>
        <TextInput
          className=""
          {...register("email")}
          id="email1"
          type="email"
          placeholder="email@gmail.com"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-slate-200" htmlFor="password1" value="Şifre" />
        </div>
        <TextInput
          {...register("password1", { required: true })}
          type="password"
          placeholder="********"
        />
        {errors.password1 && (
          <span className="text-white">Bu alan gerekli...</span>
        )}
      </div>
      {genre === "signUp" && (
        <div>
          <div className="mb-2 block">
            <Label
              className="text-slate-200"
              htmlFor="password1"
              value="Şifre Tekrar"
            />
          </div>
          <TextInput
            {...register("password2", { required: true })}
            type="password"
            placeholder="********"
          />{" "}
          {errors.password2 && (
            <span className="text-white">Bu alan gerekli...</span>
          )}
        </div>
      )}

      {genre === "login" && <Button type="submit">Giriş yap</Button>}

      <Link href={"/signup"}>
        <Button className="w-full">Hesap oluştur</Button>
      </Link>
    </form>
  );
};

export default FormComponent;
