import * as React from "react";
import { Controller } from "react-hook-form";
import { Icon, Input, Text } from "react-native-elements";

export default function TextInput({ name, control, required = true, minLength, maxLength, iconName, errors, inputStyle, errorValidationStyle }) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
            required,
            minLength,
            maxLength,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            leftIcon={<Icon name={iconName} type="material" size={24} color={black}/>}
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
      {errors.name ?.type === "required" && (
        <Text style={errorValidationStyle}>Campo requerido</Text>
      )}
        {errors.name ?.type === "minLength" && (
            <Text style={errorValidationStyle}>Contraseña demasiado corta</Text>
        )}
        {errors.name ?.type === "maxLength" && (
            <Text style={errorValidationStyle}>Contraseña demasiado larga</Text>
        )}
    </>
  );
}
