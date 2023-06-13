package dciproject.backend.function.Service;

import dciproject.backend.entireSubjects.entireSubject_2020.EntireSubject_2020;
import dciproject.backend.function.DTO.SbjRequestDTO;
import dciproject.backend.function.DTO.SbjResponseDTO;
import dciproject.backend.function.Repository.EntireSubjectRepository_2021;
import dciproject.backend.function.Repository.EntireSubjectRepository_2022;
import dciproject.backend.function.Repository.EntireSubject_2020Repository;
import dciproject.backend.function.Repository.SubjectMapping;
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


    public List<SubjectMapping> getSbjs (SbjRequestDTO sjRequestDTO){
        String year = sjRequestDTO.getYear();
        String shtm = sjRequestDTO.getShmt();
        String cdn = sjRequestDTO.getCdn();
        String dn = sjRequestDTO.getDn();
        String keyword = sjRequestDTO.getKeyword();

        log.info("SearchSubjectService::: Year={}, Shmt={}, Cdn={}, Dn={}, Keyword={}",
                year,
                shtm,
                cdn,
                dn,
                keyword
        );

        List<SubjectMapping> sbjResponseDTOList = null;

                sbjResponseDTOList = subjectRepository_2020.findAllByShtmAndCptnDivNmAndDegrNmSustAndOpenSbjtNmContaining(shtm, cdn, dn, keyword);

        return sbjResponseDTOList;
    }
}
