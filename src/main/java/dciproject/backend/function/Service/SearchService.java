package dciproject.backend.function.Service;

import dciproject.backend.entireSubjects.EntireSubject;
import dciproject.backend.entireSubjects.entireSubject_2020.EntireSubject_2020;
import dciproject.backend.function.DTO.SbjRequestDTO;
import dciproject.backend.function.DTO.SbjResponseDTO;
import dciproject.backend.function.Repository.EntireSubjectRepository_2020;
import dciproject.backend.function.Repository.EntireSubjectRepository_2021;
import dciproject.backend.function.Repository.EntireSubjectRepository_2022;
import dciproject.backend.function.Repository.SubjectMapping;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class SearchService {
    private final EntireSubjectRepository_2020 subjectRepository_2020;
    private final EntireSubjectRepository_2021 subjectRepository_2021;
    private final EntireSubjectRepository_2022 subjectRepository_2022;


    public List<SbjResponseDTO> findAllByDTO(SbjRequestDTO sjRequestDTO){
        int year = Integer.parseInt(sjRequestDTO.getYear()); // 년도
        String shmt = sjRequestDTO.getShmt(); // 학기
        String cdn = sjRequestDTO.getCdn(); // 이수구분
        String colg = sjRequestDTO.getColg(); // 단과대
        String dn = sjRequestDTO.getDn(); // 개설학과
        String keyword = sjRequestDTO.getKeyword(); // 검색어

        List<EntireSubject> source=new ArrayList<>();

        switch (year) {
            case 2020 -> source.addAll(subjectRepository_2020.findAllByOpenSbjtNmContaining(keyword));
            case 2021 -> source.addAll(subjectRepository_2021.findAllByOpenSbjtNmContaining(keyword));
            case 2022 -> source.addAll(subjectRepository_2022.findAllByOpenSbjtNmContaining(keyword));
            default -> {
                source.addAll(subjectRepository_2020.findAllByOpenSbjtNmContaining(keyword));
                source.addAll(subjectRepository_2021.findAllByOpenSbjtNmContaining(keyword));
                source.addAll(subjectRepository_2022.findAllByOpenSbjtNmContaining(keyword));
            }
        }

        List<SbjResponseDTO> result=source.stream().
                        filter(subject-> dn == null || subject.getDegrNmSust().equals(dn)). // 학과명 일치
                        filter(subject-> shmt == null || subject.getShtm().equals(shmt)). // 강의학기 일치
                        filter(subject-> colg== null || subject.getColg().equals(colg)). // 단과대명 일치
                        filter(subject-> cdn == null || subject.getCptnDivNm().equals(cdn)). // 이수구분 일치
                        map(subject->SbjResponseDTO.builder().
                                                    subjectID(subject.getSubjectID()).
                                                    trgtShyr(subject.getTrgtShyr()).
                                                    openSbjtNm(subject.getOpenSbjtNm()).
                                                    openSbjtNo(subject.getOpenSbjtNo()).
                                                    degrNmSust(subject.getDegrNmSust()).
                                                    cptnDivNm(subject.getCptnDivNm()).
                                                    profInfo(subject.getProfInfo()).build()).toList();
        return result;
    }

    public List<SubjectMapping> getSbjs (SbjRequestDTO sjRequestDTO){
        String year = sjRequestDTO.getYear();
        String shtm = sjRequestDTO.getShmt();
        String cdn = sjRequestDTO.getCdn();
        String colg = sjRequestDTO.getColg();
        String dn = sjRequestDTO.getDn();
        String keyword = sjRequestDTO.getKeyword();

        List<SubjectMapping> sbjResponseDTOList = switch (year){
            case "2020" ->
                subjectRepository_2020.findAllByShtmAndCptnDivNmAndDegrNmSustAndColgAndOpenSbjtNmContaining(shtm, cdn, dn, colg, keyword);
            case "2021"->
                subjectRepository_2021.findAllByShtmAndCptnDivNmAndDegrNmSustAndColgAndOpenSbjtNmContaining(shtm, cdn, dn, colg, keyword);
            case "2022"->
                subjectRepository_2022.findAllByShtmAndCptnDivNmAndDegrNmSustAndColgAndOpenSbjtNmContaining(shtm, cdn, dn, colg, keyword);
            default -> null;
        };

        return sbjResponseDTOList;
    }
}
