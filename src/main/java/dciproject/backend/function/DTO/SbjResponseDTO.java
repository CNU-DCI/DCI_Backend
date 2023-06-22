package dciproject.backend.function.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SbjResponseDTO {
    public String subjectID; // 과목 ID
    public String trgtShyr; // 학년
    public String openSbjtNm; // 과목명
    public String openSbjtNo; // 과목번호
    public String degrNmSust ; // 개설학과
    public String cptnDivNm; // 이수구분
    public String profInfo ; // 담당교수
}
