package com.antioquiapp.backend.repository;

import com.antioquiapp.backend.model.FavNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FavNegocioRepository extends JpaRepository<FavNegocio, Long> {
    List<FavNegocio> findByUsuarioId(Long usuarioId);
    void deleteByUsuarioIdAndNegocioId(Long usuarioId, String negocioId);
}
