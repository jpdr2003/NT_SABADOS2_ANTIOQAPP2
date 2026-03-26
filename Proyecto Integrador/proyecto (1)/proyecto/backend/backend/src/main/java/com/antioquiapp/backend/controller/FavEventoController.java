package com.antioquiapp.backend.controller;

import com.antioquiapp.backend.model.FavEvento;
import com.antioquiapp.backend.repository.FavEventoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fav-eventos")
public class FavEventoController {

    private final FavEventoRepository favEventoRepository;

    public FavEventoController(FavEventoRepository favEventoRepository) {
        this.favEventoRepository = favEventoRepository;
    }

    @GetMapping
    public List<FavEvento> listarFavEventos() {
        return favEventoRepository.findAll();
    }

    @PostMapping
    public FavEvento guardarFavEvento(@RequestBody FavEvento favEvento) {
        return favEventoRepository.save(favEvento);
    }
}