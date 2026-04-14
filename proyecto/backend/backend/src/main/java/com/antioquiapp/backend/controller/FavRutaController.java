package com.antioquiapp.backend.controller;

import com.antioquiapp.backend.model.FavRuta;
import com.antioquiapp.backend.repository.FavRutaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fav-rutas")
public class FavRutaController {

    private final FavRutaRepository favRutaRepository;

    public FavRutaController(FavRutaRepository favRutaRepository) {
        this.favRutaRepository = favRutaRepository;
    }

    @GetMapping
    public List<FavRuta> listarFavRutas() {
        return favRutaRepository.findAll();
    }

    @PostMapping
    public FavRuta guardarFavRuta(@RequestBody FavRuta favRuta) {
        return favRutaRepository.save(favRuta);
    }
}