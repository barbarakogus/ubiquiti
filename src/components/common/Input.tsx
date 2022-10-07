import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const StyledMainDiv = styled.div`
    align-items: center; 
    background-color: var(--light-gray);
    display: flex; 
    justify-content: space-between;
    padding: 6px 10px;
    width: 344px;
`;

const StyledIconSearch = styled(FiSearch)`
  color: var(--dark-gray);
  height: 20px;
  width: 20px;
`;

const StyledSectionInput = styled.section`
  align-self: normal;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

const StyledInput = styled.input`
    background-color: var(--light-gray);
    border: none;
    color: var(--dark-gray);
    font-size: 14px;
    justify-self: stretch;
    padding-left: 5px;

    &::placeholder {
        color: var(--dark-gray);
    }
    &:focus {
        outline: none;
    }
    &:focus::placeholder {
        color: transparent;
    }
`;

const StyledButton = styled.button`
    background-color: var(--light-gray);
    border: none;
    color: var(--dark-gray);
    cursor: pointer;
    font-size: 14px;

    &:focus {
        outline: none;
        opacity: 0.5;
    }
    &:hover {
        opacity: 0.5;
    }
    :disabled {
        cursor: default;
        opacity: 0.5;
    }
`;

const Input = () => {

    const [valueToSearch, setValueToSearch] = useState('')

    return (
        <StyledMainDiv>
            <section>
                <div>
                    <StyledIconSearch />
                </div>
            </section>
            <StyledSectionInput>
                <StyledInput
                    placeholder="Search"
                    value={valueToSearch}
                    onChange={(event) => setValueToSearch(event.target.value)}
                />
            </StyledSectionInput>
            <section>
                <StyledButton type="button" onClick={() => setValueToSearch("")}>
                    X
                </StyledButton>
            </section>
        </StyledMainDiv>
    )
}

export default Input;