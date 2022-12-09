import styled from "styled-components";
import iconEdit from "../../assets/icon/icon-edit.svg";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconEdit() {
  return <Img src={iconEdit} alt="수정 아이콘" />;
}
export default IconEdit;
