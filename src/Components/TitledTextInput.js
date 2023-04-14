import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #F8FAFC;
    }
`;

const HeadText = styled.text`
color: #94A3B8;
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<HeadText className="caption">{title}</HeadText>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}
export default TitledTextInput;