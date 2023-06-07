package dciproject.backend.classRegistration.classRegistration_2022;


import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistrationPK_2021;
import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistration_2021;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRegistrationRepository_2022 extends JpaRepository<ClassRegistration_2022, ClassRegistrationPK_2022> {

}
