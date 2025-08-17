package com.shom.fintrack.service;

import com.shom.fintrack.model.User;
import com.shom.fintrack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user){
        return userRepository.save(user);
    }

    public List<User> findAllUser(){
        return userRepository.findAll();
    }

    public Optional<User> findUserById(Long id){
        return userRepository.findById(id);
    }

    public User updateUser(Long id, User user){
        User updatedUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not exists..."));
        if(user.getFullName() != null){
            updatedUser.setFullName(user.getFullName());
        }
        if(user.getEmail()!=null){
            updatedUser.setEmail(user.getEmail());
        }
        return userRepository.save(updatedUser);
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}
