package dciproject.backend.keywordSet;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class KeywordSet {
    @Id
    @Column(name="keyword")
    public String text;
    @Column(name="number")
    public Integer value;
}
