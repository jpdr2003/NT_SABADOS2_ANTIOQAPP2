package com.antioquiapp.backend.repository;

import com.antioquiapp.backend.model.FavRuta;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FavRutaRepository extends JpaRepository<FavRuta, Long> {
    List<FavRuta> findByUsuarioId(Long usuarioId);
    void deleteByUsuarioIdAndRutaId(Long usuarioId, String rutaId);
}