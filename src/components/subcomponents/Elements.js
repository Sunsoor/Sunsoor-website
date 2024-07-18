import React , { useRef,useState }from "react";
import "./Elements.css"
import { useTranslation } from 'react-i18next';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { isValidNumber } from 'libphonenumber-js';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { TfiUpload } from "react-icons/tfi";


export const Logo = (props) => {
    const { t } = useTranslation();
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
            onClick={props.handler}
        >
            {props.content}
        </a>

    );
}

export const SubmitButton = ({ backgroundColor, textColor, content, handler,type }) => {
    const buttonStyle = {
        backgroundColor,
        color: textColor,
    };

    return (
        <button
            type="submit"
            className="submit-button"
            style={buttonStyle}
            onClick={handler}
        >
            {content}
        </button>
    );
};


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

export const NavLinks = (props) => {

    const location = useLocation();
    const { pathname } = location;
    return (
        <a
            href={props.path}
            onClick={() => props.onLinkClick && props.onLinkClick(props.linkId)}
            className={`nav-link ${pathname === props.path ? 'nav-link-clicked' : 'nav-link'}`}
        >
            {props.content}
        </a>
    );
};

export const LangDropdown = ({ options, selectedValue, onChange, className }) => {
    return (
        <div className={`dropdown-container ${className}`}>
            <select
                onChange={(e) => onChange(e.target.value)}
                value={selectedValue}
                className="LangDropdown-dropdown"
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

export const CustomDropdown = ({ label, options, value, onChange }) => {
    return (
        <div className="dropdown-container">
            <label className="customInputLabel">{label}</label>
            <select className="dropdown-select" value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const CustomRange = ({ label,from, to, onChangeFrom ,onChangeTo }) => {
    return (
        <div className="range-main-container">
            <label className="customInputLabel">{label}</label>
            <div className="range-container">
            <label>From</label> 
            <input className="range-from-to" type="number" name="from" value={from} onChange={onChangeFrom} />
            <label>To</label>
            <input className="range-from-to" type="number" name="to" value={to} onChange={onChangeTo} />
            </div>
            
        </div>
    );
};

export const InputField = ({ validInputCode, changeHandler, inputHeading, name, value, Type, placeholder }) => {
    return (
        <div className="inputFiled">
            <label className={validInputCode ? 'valid' : 'invalid'} >{inputHeading} </label>
            <input
                required
                type={Type}
                name={name}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                className={validInputCode ? 'validInputCode' : 'invalidInputCode'}
            />

            {!validInputCode && (
                <div className="InvalidTextBox">
                    <AiOutlineExclamationCircle className="TextInvlid" />
                    <p className="TextInvlid" >Invalid Code</p>
                </div>
            )}
        </div>

    )
}

export const CustomInputField = ({ label, onChange, name, value, type, placeholder }) => {
    return (
        <div className="customInputField">
            <label className="customInputLabel">{label}</label>
            <input
                required
                type={type}
                name={name}
                value={value}
                onChange={onChange} // Corrected prop name here
                placeholder={placeholder}
                className="customInput"
            />
        </div>
    );
};


export const CustomTextarea = ({ label, onChange, name, value, placeholder }) => {
    return (
        <div className='custom-textarea'>
            <label className='custom-textarea-label'>{label}</label>
            <textarea
                className='custom-textarea-input'
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange} // Corrected prop name here
                required
            ></textarea>
        </div>
    );
};


export const CustomFileUploader = ({ label, accept, onChange, placeholder }) => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
        onChange(e); // Ensure the passed onChange handler is still called
    };

    return (
        <div className="file-uploader-container">
            <label className="file-uploader-label">{label}</label>
            <div className="file-uploader-input-container">
                <input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="file-uploader-input"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                <div className="file-uploader-placeholder">
                    <span className="file-uploader-placeholder-text">
                        {fileName ? `${fileName} Uploaded` : placeholder}
                    </span>
                    <button type="button" className="file-uploader-button" onClick={handleClick}>
                        <TfiUpload className="upload-icon" />
                        Upload
                    </button>
                </div>
            </div>
            <p className="file-uploader-hint">Upload in Jpg (Preferred), Png.</p>
        </div>
    );
};

export const PhoneNumberValidation = ({ setFormData, validPhoneNumber, setvalidPhoneNumber }) => {

    const verifyvalidPhoneNumber = (value) => {
        try {
            const PN = '+' + value
            return isValidNumber(PN);
        } catch (error) {
            return false;
        }
    }
    const handleChange = (value) => {
        setFormData(prevData => ({
            ...prevData,
            PhoneNumber: value
        }));
        setvalidPhoneNumber(verifyvalidPhoneNumber(value));
    };


    return (
        <div>
            <label>
                <p className={validPhoneNumber ? 'valid' : 'invalid'}>Phone Number</p>
                <div className={validPhoneNumber ? 'ValidPhoneNumberBox' : 'InvalidPhoneNumberBox'} >
                    <PhoneInput
                        country={'in'}
                        onChange={handleChange}
                        placeholder="000 000 000"
                        inputProps={{
                            required: true
                        }}
                    />
                </div>
            </label>
            {!validPhoneNumber && (
                <div className="InvalidTextBox">
                    <AiOutlineExclamationCircle className="TextInvlid" />
                    <p className="TextInvlid" >Invalid number</p>
                </div>
            )}
        </div>
    )
}

export const CustomPopup = ({amount, message, acceptButtonContent, rejectButtonContent, onAccept, onReject  }) => {
    return (
        <div className="popup-overlay">
      <div className="popup-content">
      {amount && (
                    <h2 className="popup-amount">
                        {amount}<p>Rs.</p>
                    </h2>
                )}
        <p className="popup-massage">{message}</p>
        <div className="popup-buttons">
          <button onClick={onReject} className="reject-button">{rejectButtonContent}</button>
          <button onClick={onAccept} className="accept-button">{acceptButtonContent}</button>
        </div>
      </div>
    </div>
    );
};