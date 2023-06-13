package dciproject.backend.function.Service;

import dciproject.backend.function.DTO.SbjRequestDTO;
import dciproject.backend.function.DTO.SbjResponseDTO;
import dciproject.backend.function.Repository.EntireSubjectRepository_2021;
import dciproject.backend.function.Repository.EntireSubjectRepository_2022;
import dciproject.backend.function.Repository.EntireSubject_2020Repository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class SearchService {
    private final EntireSubject_2020Repository subjectRepository_2020;
    private final EntireSubjectRepository_2021 subjectRepository_2021;
    private final EntireSubjectRepository_2022 subjectRepository_2022;


    public List<SbjResponseDTO> getSbjs (SbjRequestDTO sjRequestDTO){

        String year = sjRequestDTO.getYear();
        String shtm = sjRequestDTO.getShmt();
        String cdn = sjRequestDTO.getCdn();
        String dn = sjRequestDTO.getDn();
        String keyword = sjRequestDTO.getKeyword();

        List<SbjResponseDTO> sbjResponseDTOList = null;

        switch (year){
            case "2020":
                sbjResponseDTOList = subjectRepository_2020.findAllBySHTMAndCPTN_DIV_NMAndDEGR_NM_SUSTAndOPEN_SBJT_NMContaining(shtm, cdn, dn, keyword);
            case "2021":
                break;
            case "2022":
                break;
        }

        return sbjResponseDTOList;

    }
}

//    public String year; // 년도
//    public String shmt; // 학기
//    public String cdn; // 이수구분
//    public String dn ; // 학과
//    public String keyword ; // 검색
