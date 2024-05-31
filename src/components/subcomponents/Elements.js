import React from "react";
import "./Elements.css"
import { useTranslation } from 'react-i18next';

export const Logo = (props) => {
    const {t} = useTranslation();
    return (
        <a className='logo-container' href={props.path}>
            <div className='logo'></div>
            <div className="logo-heading">{t("logo")}</div>
        </a>
    );
}

export const CustomButton = (props) => {

    // Inline style object to apply background color from props
    const buttonStyle = {
        backgroundColor: props.backgroundColor,
        color: props.textColor
    };
    return (
        <a
            href={props.path}
            className="custom-button"
            style={buttonStyle}
        >
            {props.content}
        </a>

    );
}

export const MainHeading = (props) => {
    return (
        <h1 className='main-heading'>
            {props.prehighlight}
            <span className="highlight">{props.highlight}</span>
            {props.posthighlight}
        </h1>
    );
}

export const SubHeading = (props) => {
    return (
        <h3 className='subHeading'>{props.heading}</h3>
    )
}

export const ParaContain = (props) => {
    return (
        <p className='Page-content'>
            {props.content}
        </p>
    );
}

export const CustomLinks = (props) => {
    return (
        <a className='custom-links' href={props.path}>{props.content}</a>
    );
}

export const CustomDropdown = ({ options, selectedValue, onChange, className }) => {
    return (
      <div className={`dropdown-container ${className}`}>
        <select
          onChange={(e) => onChange(e.target.value)}
          value={selectedValue}
          className="custom-dropdown"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
