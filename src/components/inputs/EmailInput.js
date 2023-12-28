import * as React from "react";
import { Controller } from "react-hook-form";
import { Icon, Input, Text } from "react-native-elements";

export default function EmailInput({ name, control, errors, inputStyle, errorValidationStyle }) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email is invalid"
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            leftIcon={<Icon name="email" type="material" size={24} color={black}/>}
            keyboardType="email-address"
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={inputStyle}
            //errorMessage={errors[name] && errors[name].message}
          />
        )}
      />
      {errors.email ?.type === "required" && (
        <Text style={errorValidationStyle}>Email is required.</Text>
      )}
        {errors.email ?.type === "pattern" && (
            <Text style={errorValidationStyle}>Email is invalid.</Text>
        )}
    </>
  );
}
