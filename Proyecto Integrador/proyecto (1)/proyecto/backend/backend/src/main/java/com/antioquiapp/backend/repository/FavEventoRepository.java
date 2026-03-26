package com.antioquiapp.backend.repository;

import com.antioquiapp.backend.model.FavEvento;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FavEventoRepository extends JpaRepository<FavEvento, Long> {
    List<FavEvento> findByUsuarioId(Long usuarioId);
    void deleteByUsuarioIdAndEventoId(Long usuarioId, String eventoId);
}