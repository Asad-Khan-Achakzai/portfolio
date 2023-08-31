import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ skill, progress }) => {
    return (
        <SkillContainer>
            <SkillName>{skill}</SkillName>
            <ProgressBarContainer>
                <ProgressFill style={{ width: `${progress}%` }} />
            </ProgressBarContainer>
        </SkillContainer>
    );
}

export default ProgressBar;

const SkillContainer = styled.div`
    margin: 20px 0;
    text-align: left;
`;

const SkillName = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`;

const ProgressBarContainer = styled.div`
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
`;

const ProgressFill = styled.div`
    height: 100%;
    background-color: #01be96;
    border-radius: 5px;
    transition: width 0.5s ease-in-out;
`;
