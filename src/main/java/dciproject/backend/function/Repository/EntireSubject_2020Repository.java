package dciproject.backend.function.Repository;

import dciproject.backend.entireSubjects.entireSubject_2020.EntireSubject_2020;
import dciproject.backend.function.DTO.SbjResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EntireSubject_2020Repository extends JpaRepository<EntireSubject_2020, String> {
    //List<SbjResponseDTO> findAllByshtmAndcptnDivNmAnddegrNmSustAndopenSbjtNmContaining (String s, String c, String d, String k);

    List<SubjectMapping> findAllByShtmAndCptnDivNmAndDegrNmSustAndOpenSbjtNmContaining(String shtm, String cptnDivNm, String degrNmSust, String openSbjtNm);

}
