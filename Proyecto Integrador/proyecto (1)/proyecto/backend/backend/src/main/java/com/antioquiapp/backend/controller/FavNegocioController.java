package com.antioquiapp.backend.controller;

import com.antioquiapp.backend.model.FavNegocio;
import com.antioquiapp.backend.repository.FavNegocioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fav-negocios")
public class FavNegocioController {

    private final FavNegocioRepository favNegocioRepository;

    public FavNegocioController(FavNegocioRepository favNegocioRepository) {
        this.favNegocioRepository = favNegocioRepository;
    }

    @GetMapping
    public List<FavNegocio> listarFavNegocios() {
        return favNegocioRepository.findAll();
    }

    @PostMapping
    public FavNegocio guardarFavNegocio(@RequestBody FavNegocio favNegocio) {
        return favNegocioRepository.save(favNegocio);
    }
}