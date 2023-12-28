import * as React from "react";
import { Controller } from "react-hook-form";
import { Icon, Input, Text } from "react-native-elements";

export default function PasswordInput({ name, control, errors, minLength, maxLength, inputStyle, errorValidationStyle, secureEntry, toggleSecureEntry }) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
            required: true,
            minLength: {minLength},
            maxLength: {maxLength},
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            leftIcon={<Icon name="key" type="material" size={24} color={black}/>}
            rightIcon={<Icon name="eye" type="material" size={24} color={black} onPress={toggleSecureEntry}/>}
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
